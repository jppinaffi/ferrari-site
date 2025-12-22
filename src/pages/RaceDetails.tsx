import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    getMeeting,
    getRaceSession,
    getRaceResults,
    getDrivers,
    getLaps,
    getCircuit,
} from '../services/f1Api';
import { RaceResult, Driver, Meeting } from '../services/f1ApiTypes';
import { CircuitViewer } from '../components/CircuitViewer';
import { circuitMap } from '../helpers/circuitMapper';

interface EnrichedResult extends RaceResult {
    driver?: Driver;
}

export default function RaceDetails() {

    const { meetingKey } = useParams();
    const [meeting, setMeeting] = useState<Meeting | null>(null);
    const [results, setResults] = useState<EnrichedResult[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalLaps, setTotalLaps] = useState<number>(0);
    const [circuitLength, setCircuitLength] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            if (!meetingKey) return;
            setLoading(true);
            try {
                const key = parseInt(meetingKey);
                const meetingData = await getMeeting(key);
                setMeeting(meetingData);

                if (meetingData) {
                    // Fetch Circuit Info
                    if (meetingData.circuit_key) {
                        const circuit = await getCircuit(meetingData.circuit_key);
                        if (circuit) {
                            setCircuitLength(circuit.circuit_length || 0);
                        }
                    }

                    const session = await getRaceSession(key);
                    if (session) {
                        const [raceResults, drivers, laps] = await Promise.all([
                            getRaceResults(session.session_key),
                            getDrivers(session.session_key),
                            getLaps(session.session_key)
                        ]);

                        // Circuit Length Fallback (in meters)
                        const CIRCUIT_LENGTHS: Record<string, number> = {
                            'Bahrain International Circuit': 5412,
                            'Jeddah Corniche Circuit': 6174,
                            'Albert Park Circuit': 5278,
                            'Suzuka International Racing Course': 5807,
                            'Shanghai International Circuit': 5451,
                            'Miami International Autodrome': 5412,
                            'Autodromo Enzo e Dino Ferrari': 4909,
                            'Circuit de Monaco': 3337,
                            'Circuit Gilles Villeneuve': 4361,
                            'Circuit de Barcelona-Catalunya': 4657,
                            'Red Bull Ring': 4318,
                            'Silverstone Circuit': 5891,
                            'Hungaroring': 4381,
                            'Circuit de Spa-Francorchamps': 7004,
                            'Circuit Zandvoort': 4259,
                            'Autodromo Nazionale Monza': 5793,
                            'Baku City Circuit': 6003,
                            'Marina Bay Street Circuit': 4940,
                            'Circuit of The Americas': 5513,
                            'Autódromo Hermanos Rodríguez': 4304,
                            'Interlagos Circuit': 4309,
                            'Las Vegas Strip Circuit': 6201,
                            'Lusail International Circuit': 5419,
                            'Yas Marina Circuit': 5281
                        };

                        // Calculate total laps
                        if (laps.length > 0) {
                            const maxLap = Math.max(...laps.map(l => l.lap_number));
                            setTotalLaps(maxLap);
                        }

                        // Use API length or fallback
                        if (meetingData.circuit_short_name && !circuitLength) {
                            const fallback = CIRCUIT_LENGTHS[meetingData.circuit_short_name] ||
                                CIRCUIT_LENGTHS[Object.keys(CIRCUIT_LENGTHS).find(k => meetingData.circuit_short_name.includes(k) || k.includes(meetingData.circuit_short_name)) || ''];
                            if (fallback) setCircuitLength(fallback);
                        }

                        const enriched = raceResults.map(result => ({
                            ...result,
                            driver: drivers.find(d => d.driver_number === result.driver_number)
                        })).sort((a, b) => {
                            const posA = (a.position && a.position > 0) ? a.position : 999;
                            const posB = (b.position && b.position > 0) ? b.position : 999;
                            return posA - posB;
                        });

                        setResults(enriched);
                    }
                }
            } catch (error) {
                console.error('Error fetching race details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [meetingKey]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-32 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-600 text-4xl font-bold mb-4 animate-pulse">SCUDERIA FERRARI</div>
                </div>
            </div>
        );
    }

    if (!meeting) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-32 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl text-white mb-6">Corrida não encontrada</h1>
                    <Link to="/races" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 inline-block transition-all duration-300">
                        Voltar para Corridas
                    </Link>
                </div>
            </div>
        );
    }

    const raceDistance = totalLaps && circuitLength ? (totalLaps * circuitLength / 1000).toFixed(3) : '--';

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900"
            style={{ paddingTop: '9rem' }}
        >
            <div className="container mx-auto px-6">
                {/* Back Button */}
                <Link to="/races" className="inline-flex items-center text-gray-400 hover:text-red-500 mb-8 transition-colors duration-300 group">
                    <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Voltar para Corridas
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="h-px bg-red-500 w-16"></div>
                        <span className="text-red-500 uppercase tracking-wider text-sm">Grande Prêmio</span>
                        <div className="h-px bg-red-500 w-16"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                                {meeting.meeting_name}
                            </h1>
                            <div className="text-xl text-red-500 font-medium">
                                {meeting.location}, {meeting.country_name}
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0 text-left md:text-right">
                            <div className="text-gray-300 text-lg mb-1">
                                {new Date(meeting.date_start).toLocaleDateString('pt-BR', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                            <div className="text-gray-500">{meeting.circuit_short_name}</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Results Table */}
                    <div className="lg:col-span-2">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Resultados da Corrida</h2>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-900/50">
                                        <tr className="text-gray-400 text-xs uppercase tracking-wider">
                                            <th className="px-6 py-4 text-left">Pos</th>
                                            <th className="px-6 py-4 text-left">Piloto</th>
                                            <th className="px-6 py-4 text-left">Equipe</th>
                                            <th className="px-6 py-4 text-right">Tempo/Distância para o Primeiro</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        {results.map((result) => {
                                            const isFerrari = result.driver?.team_name.toLowerCase().includes('ferrari');
                                            const isFinished = result.status === 'Finished';
                                            const isWinner = result.position === 1;
                                            const displayStatus = isWinner
                                                ? formatTime(result.duration)
                                                : result.gap_to_leader

                                            const displayPosition = (result.position && result.position > 0) ? result.position : 'DNF';

                                            return (
                                                <tr key={result.driver_number}
                                                    className={`
                                                        transition-all duration-300
                                                        ${isFerrari
                                                            ? 'bg-red-900/20 hover:bg-red-900/30'
                                                            : 'hover:bg-gray-800/50'}
                                                    `}>
                                                    <td className="px-6 py-4">
                                                        <span className={`
                                                            font-bold text-lg
                                                            ${result.position === 1 ? 'text-yellow-400' :
                                                                result.position === 2 ? 'text-gray-300' :
                                                                    result.position === 3 ? 'text-orange-400' :
                                                                        'text-gray-400'}
                                                        `}>
                                                            {displayPosition}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            {result.driver?.headshot_url && (
                                                                <img
                                                                    src={result.driver.headshot_url}
                                                                    alt=""
                                                                    className="w-10 h-10 rounded-full bg-gray-700 object-cover mr-3 border-2 border-gray-600"
                                                                />
                                                            )}
                                                            <div>
                                                                <div className={`font-bold ${isFerrari ? 'text-red-500' : 'text-white'}`}>
                                                                    {result.driver?.full_name}
                                                                </div>
                                                                <div className="text-xs text-white">
                                                                    #{result.driver?.driver_number}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={`px-6 py-4 ${isFerrari ? 'text-red-400 font-bold' : 'text-gray-400'}`}>
                                                        {result.driver?.team_name}
                                                    </td>
                                                    <td className="px-6 py-4 text-right font-mono text-sm text-gray-300">
                                                        {displayStatus}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-6">
                            {/* Track Map */}
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="bg-gray-800 p-8 aspect-square flex items-center justify-center">
                                    <div className="text-center">
                                        {/*<img src={`../../public/tracks/${trackId}.svg`} alt={trackId} className="w-full h-full object-cover" />*/}
                                        <div className="font-bold text-xl text-white">
                                            Circuito
                                        </div>
                                        <CircuitViewer circuitShortName={meeting.circuit_short_name} />
                                        <div className="text-sm text-white mt-2">
                                            {meeting.circuit_short_name}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Race Stats */}
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl"
                                style={{ padding: '2rem', marginTop: '2rem' }}>
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <span className="text-red-500 mr-2">●</span>
                                    Estatísticas
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                                        <span className="text-gray-400">Vencedor</span>
                                        <span className="text-white font-bold">
                                            {results[0]?.driver?.last_name || '--'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                                        <span className="text-gray-400">Total de Voltas</span>
                                        <span className="text-white font-mono">{totalLaps || '--'}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Distância</span>
                                        <span className="text-white font-mono">{raceDistance} km</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function formatTime(seconds: number): string {
    if (!seconds) return 'N/A';
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed(3);
    return `${mins}:${secs.padStart(6, '0')}`;
}