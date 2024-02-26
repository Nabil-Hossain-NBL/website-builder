

async function getAllProduct() {
    try {
        const data = await import('@/lib/data.json');
        return data.default
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export default getAllProduct;