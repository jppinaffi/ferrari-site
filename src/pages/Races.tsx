import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateStandings, ConstructorStanding, DriverStanding } from '../utils/standingCalculator';
import { fetchWithCache } from '../utils/apiHelpers';
import { Meeting } from '../services/f1ApiTypes';
import Flag from 'react-world-flags';


export default function Races() {
    const navigate = useNavigate();
    const [year, setYear] = useState(new Date().getFullYear());
    const [races, setRaces] = useState<Meeting[]>([]);
    const [driverStandings, setDriverStandings] = useState<DriverStanding[]>([]);
    const [constructorStandings, setConstructorStandings] = useState<ConstructorStanding[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const meetings: Meeting[] = await fetchWithCache(`https://api.openf1.org/v1/meetings?year=${year}`);
                const sortedMeetings = meetings
                    .filter(m => new Date(m.date_start) >= new Date(`${year}-03-01`))
                    .sort((a, b) => new Date(a.date_start).getTime() - new Date(b.date_start).getTime());
                setRaces(sortedMeetings);

                const { drivers, constructors } = await calculateStandings(year);
                setDriverStandings(drivers);
                setConstructorStandings(constructors);
            } catch (error) {
                console.error('Error fetching race data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [year]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-600 text-4xl font-bold mb-4 animate-pulse">SCUDERIA FERRARI</div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900"
            style={{ paddingTop: '8rem' }}
        >
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-4 mb-6">
                        <div className="h-px bg-red-500 w-16"></div>
                        <span className="text-red-500 uppercase tracking-wider">Temporada</span>
                        <div className="h-px bg-red-500 w-16"></div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        Calendário de Corridas
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-10">
                        Acompanhe todas as corridas e classificações do campeonato
                    </p>
                </div>

                {/* Year Display */}
                <div className="mb-8 flex justify-center"
                    style={{ marginTop: '40px' }}>
                    <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full px-8 py-3 shadow-lg">
                        <span className="text-white text-2xl font-bold">{year}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Drivers Championship */}
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl h-full">
                            <div className="flex items-center mb-6 pb-4 border-b border-red-600">
                                <span className="text-red-500 text-2xl mr-3">🏆</span>
                                <h2 className="text-xl font-bold text-white">
                                    Campeonato de Pilotos
                                </h2>
                            </div>
                            <div className="space-y-3">
                                {driverStandings.slice(0, 10).map((driver) => {
                                    const isFerrari = driver.team_name.toLowerCase().includes('ferrari');
                                    return (
                                        <div key={driver.driver_number}
                                            className={`
                                                p-3 rounded-lg transition-all duration-300
                                                ${isFerrari
                                                    ? 'bg-red-900/20 border border-red-800/50'
                                                    : 'bg-gray-800/30 hover:bg-gray-800/50'}
                                             `}>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <span className={`
                                                        font-bold text-lg w-6
                                                        ${driver.position === 1 ? 'text-yellow-400' :
                                                            driver.position === 2 ? 'text-gray-300' :
                                                                driver.position === 3 ? 'text-orange-400' :
                                                                    'text-gray-500'}
                                                    `}>
                                                        {driver.position}
                                                    </span>
                                                    <div>
                                                        <div className={`font-bold text-sm ${isFerrari ? 'text-red-500' : 'text-white'}`}>
                                                            {driver.driver_name}
                                                        </div>
                                                        <div className="text-xs text-gray-400">
                                                            {driver.team_name}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="font-mono font-bold text-sm text-white">
                                                    {driver.points}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Races Grid */}
                    <div className="lg:col-span-2">
                        {/* ALTERADO: Cards maiores (menos colunas) */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {races.map((race) => {
                                const isCompleted = new Date(race.date_start) < new Date();
                                return (
                                    <div
                                        key={race.meeting_key}
                                        onClick={() => navigate(`/races/${race.meeting_key}`)}
                                        className={`
                        group relative aspect-square rounded-xl p-3 
                        flex flex-col justify-between cursor-pointer 
                        transition-all duration-300 transform
                        bg-gradient-to-br from-gray-800 to-gray-900
                        hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20
                        overflow-hidden
                        ${isCompleted ? 'opacity-100' : 'opacity-70'}
                    `}
                                    >

                                        <div className="text-center z-10 flex flex-col items-center h-full justify-center">
                                            <div className="w-16 h-10 mb-3 transform group-hover:scale-110 transition-transform shadow-lg rounded overflow-hidden">
                                                <Flag code={getCorrectFlagCode(race)} className="w-full h-full object-cover" fallback={<span>🏁</span>} />
                                            </div>
                                            <div className="font-bold text-sm leading-tight mb-1 text-white px-1">
                                                {race.meeting_name.replace('Grand Prix', '').trim()}
                                            </div>
                                            <div className="text-xs text-gray-400 truncate w-full">
                                                {race.location}
                                            </div>
                                            <div className="text-[15px] text-gray-500 mt-2 font-mono">
                                                {new Date(race.date_start).toLocaleDateString('pt-BR', {
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Constructors Championship */}
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl h-full">
                            <div className="flex items-center mb-6 pb-4 border-b border-red-600">
                                <span className="text-red-500 text-2xl mr-3">🏁</span>
                                <h2 className="text-xl font-bold text-white">
                                    Campeonato de Construtores
                                </h2>
                            </div>
                            <div className="space-y-3">
                                {constructorStandings.map((team) => {
                                    const isFerrari = team.team_name.toLowerCase().includes('ferrari');
                                    return (
                                        <div key={team.team_name}
                                            className={`
                                                p-3 rounded-lg transition-all duration-300
                                                ${isFerrari
                                                    ? 'bg-red-900/20 border border-red-800/50'
                                                    : 'bg-gray-800/30 hover:bg-gray-800/50'}
                                             `}>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <span className={`
                                                        font-bold text-lg w-6
                                                        ${team.position === 1 ? 'text-yellow-400' :
                                                            team.position === 2 ? 'text-gray-300' :
                                                                team.position === 3 ? 'text-orange-400' :
                                                                    'text-gray-500'}
                                                    `}>
                                                        {team.position}
                                                    </span>
                                                    <div className={`font-bold text-sm ${isFerrari ? 'text-red-500' : 'text-white'}`}>
                                                        {team.team_name}
                                                    </div>
                                                </div>
                                                <div className="font-mono font-bold text-sm text-white">
                                                    {team.points}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer decoration */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center space-x-4">
                        <div className="h-px bg-gray-700 w-24"></div>
                        <span className="text-gray-500 uppercase tracking-wider text-sm">Forza Ferrari</span>
                        <div className="h-px bg-gray-700 w-24"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getCorrectFlagCode(race: Meeting): string {
    const meetingName = race.meeting_name.toLowerCase();
    const countryName = race.country_name?.toLowerCase() || '';
    const location = race.location?.toLowerCase() || '';

    // Saudi Arabia
    if (countryName.includes('saudi') || location.includes('jeddah')) return 'SA';

    // Monaco
    if (countryName.includes('monaco') || meetingName.includes('monaco')) return 'MC';

    // Netherlands
    if (countryName.includes('netherlands') || meetingName.includes('dutch')) return 'NL';

    // UAE / Abu Dhabi
    if (countryName.includes('emirates') || location.includes('dhabi')) return 'AE';

    // USA / United States
    if (countryName.includes('united states') || countryName === 'usa') return 'US';

    // Great Britain / UK
    if (countryName.includes('britain') || countryName === 'uk') return 'GB';

    if (countryName.includes('bahrain')) return 'BHR';

    return race.country_code;
}