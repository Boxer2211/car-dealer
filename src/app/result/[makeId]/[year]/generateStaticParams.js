import { fetchData } from '@/utils/fetchData';
import { VEHICLE_API_URL } from '@/utils/constants';

// Generate static params for the result pages
export async function generateStaticParams() {
    const makesUrl = `${VEHICLE_API_URL}/GetMakesForVehicleType/car?format=json`;
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i);
    let makes = [];

    try {
        const data = await fetchData(makesUrl);
        makes = data.Results || [];
    } catch (error) {
        console.error('Error fetching vehicle makes:', error);
    }

    const params = [];

    // Create static paths for a subset of makes and years
    makes.slice(0, 5).forEach((make) => {
        years.forEach((year) => {
            params.push({ makeId: make.MakeId, year: year.toString() });
        });
    });

    return params;
}
