export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.sourceoftrust.org' || (url.hostname === 'sourceoftrust.org' && url.protocol === 'http:')) {
      url.protocol = 'https:';
      url.hostname = 'sourceoftrust.org';
      url.port = '';
      return Response.redirect(url.href, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
