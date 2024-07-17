interface RequestData {
  address: string;
}

async function POST(requestData: RequestData): Promise<Response> {
  const response = await fetch("/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  return response;
}

interface JsonData {
  en: {
    word: string;
    pronunciation: string;
    sentence: string;
    paragraphs: string;
  };
  zh: {
    word: string;
    pronunciation: string;
    sentence: string;
    paragraphs: string;
  };
  gifUrl: string;
}

async function processData(requestData: RequestData): Promise<JsonData> {
  const response = await POST(requestData);
  if (response.ok) {
    return (await response.json()) as JsonData;
  } else {
    throw new Error(`Error fetching data: ${response.status}`);
  }
}
