export default {
  async fetch(request) {
    if (request.method === "GET") {
      return new Response("Mad Airport Interaction Endpoint Online!");
    }

    return new Response("Invalid request", {
      status: 400
    });
  }
};