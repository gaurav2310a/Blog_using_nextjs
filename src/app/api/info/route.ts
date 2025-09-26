let lastUpdated = new Date().toISOString();
let currentData = { name: 'Mini Blog App', author: 'Intern' };

export async function GET() {
  return Response.json({
    ...currentData,
    lastUpdated: lastUpdated
  });
}

export async function POST(request: Request) {
  try {
    const newData = await request.json();

    // Update the data and timestamp only if data actually changed
    if (JSON.stringify(newData) !== JSON.stringify(currentData)) {
      currentData = { ...currentData, ...newData };
      lastUpdated = new Date().toISOString();
    }

    return Response.json({
      ...currentData,
      lastUpdated: lastUpdated
    });
  } catch (error) {
    return Response.json({ error: 'Invalid data format' }, { status: 400 });
  }
}
