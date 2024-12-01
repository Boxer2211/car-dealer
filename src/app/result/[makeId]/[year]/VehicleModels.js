import { fetchData } from '@/utils/fetchData';
import { VEHICLE_API_URL } from '@/utils/constants';

const VehicleModels = async ({ params }) => {
    const { makeId, year } = await params;
    const url = `${VEHICLE_API_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;

    let models = [];
    try {
        const data = await fetchData(url);
        models = data.Results || [];
    } catch (error) {
        console.error('Failed to fetch vehicle models:', error);
    }

    return (
        <ul className="w-full max-w-2xl bg-white rounded shadow-md p-4">
            {models.length > 0 ? (
                models.map((model,index) => (
                    <li key={index} className="border-b last:border-0 border-gray-200 p-2">
                        {model.Model_Name}
                    </li>
                ))
            ) : (
                <p className="text-gray-600">No models found for the selected make and year.</p>
            )}
        </ul>
    );
};

export default VehicleModels;
