import { Suspense } from 'react';
import VehicleModels from './VehicleModels';

const ResultPage = ({ params }) => {
    return (
        <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center text-gray-700">
            <h1 className="text-3xl font-bold mb-6">Vehicle Models</h1>
            <Suspense fallback={<p className="text-xl text-gray-500">Loading models...</p>}>
                <VehicleModels params={params} />
            </Suspense>
        </div>
    );
};

export default ResultPage;
