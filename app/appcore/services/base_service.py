import logging

from appcore.helpers.singleton import Singleton
from backports.configparser import ConfigParser

from appcore.services.storage_service import StorageService


@Singleton
class BaseService(object):
    def __init__(self):
        self.config = self._populate_config()
        self.storage = StorageService(dict(self.config.items('storage')))
        self.logger = logging.getLogger()

    def _populate_config(self):
        config = ConfigParser()
        with open('../resources/config.ini') as file_pointer:
            config.read_file(file_pointer)

        return config
