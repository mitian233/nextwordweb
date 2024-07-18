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

async function GETWord(): Promise<Response> {
  const response = await fetch("http://pfybgc.natappfree.cc/getmsg", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
  });

  return response;
}

async function GETOneSentence(): Promise<Response> {
  const response = await fetch(
    "https://api.oioweb.cn/api/common/OneDayEnglish",
    {
      method: "GET",
    }
  );

  return response;
}

async function requestOneSentenceJsonData(): Promise<string> {
  // requestData: RequestData
  const response = await GETOneSentence();
  if (response.ok) {
    return JSON.stringify(await response.json());
  } else {
    throw new Error(`Error fetching data: ${response.status}`);
  }
}

async function requestJsonData(): Promise<string> {
  // requestData: RequestData
  const response = await GETWord();
  if (response.ok) {
    return JSON.stringify(await response.json());
  } else {
    throw new Error(`Error fetching data: ${response.status}`);
  }
}

export { requestJsonData, requestOneSentenceJsonData };
