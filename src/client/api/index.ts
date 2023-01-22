const BASE_PATH = 'http://localhost:3001';

export const requestGET = async (url: string, options = {}) => {
  try {
    const response = await fetch(`${BASE_PATH}${url}`, options);

    const json = await response.json();
    if (response.ok) {
      return json;
    }

    if (json.error) {
      throw new Error(json.error);
    }

    throw new Error('API 통신 실패');
  } catch (error) {
    throw error;
  }
};

export const requestPOST = async (url: string, body: any) => {
  try {
    const response = await fetch(`${BASE_PATH}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const json = await response.json();

    if (response.ok) {
      return json;
    }

    if (json.code === 400) {
      throw new Error(json.message);
    }

    throw new Error('API 통신 실패');
  } catch (error) {
    throw error;
  }
};

export const requestDELETE = async (url: string) => {
  try {
    const response = await fetch(`${BASE_PATH}${url}`, {
      method: 'DELETE',
    });

    const json = await response.json();
    if (response.ok) {
      return json;
    }

    if (!json.success) {
      throw new Error(json.message);
    }

    throw new Error('API 통신 실패');
  } catch (error) {
    throw error;
  }
};

export const requestPATCH = async (url: string, body: any) => {
  try {
    const response = await fetch(`${BASE_PATH}${url}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const json = await response.json();
    if (response.ok) {
      return json;
    }

    throw new Error('API 통신 실패');
  } catch (error) {
    throw error;
  }
};
