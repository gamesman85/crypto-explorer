const processCryptoRequest = async (text, algorithm, operation, key) => {
  try {
    const response = await fetch('http://localhost:3001/api/crypto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        algorithm,
        operation,
        key
      }),
    });
    
    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
};

export { processCryptoRequest };