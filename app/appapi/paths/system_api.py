from bottle import request, response

from appapi.paths.base_api import BaseApi


class SystemApi(BaseApi):
    def _path(self):
        return 'system'

    def alive(self):
        """
        GET
        """
        return 'Alive'

    def echo(self):
        """
        GET,POST
        """
        if request.json:
            echoed_message = request.json.get('message')
        else:
            echoed_message = request.GET.get('message')

        if not echoed_message:
            response.status = 400
            echoed_message = 'Missing "message" parameter'

        return echoed_message
