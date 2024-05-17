export const getProductList = async () => {
  try {
    const response = await fetch('/api/product');
    if (!response.ok) {
      throw new Error('Fail to fetch');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};