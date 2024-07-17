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

async function processData(requestData: RequestData): Promise<WordJsonData> {
  const response = await POST(requestData);
  if (response.ok) {
    return (await response.json()) as WordJsonData;
  } else {
    throw new Error(`Error fetching data: ${response.status}`);
  }
}
