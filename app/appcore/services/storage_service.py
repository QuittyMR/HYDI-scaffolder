from redis import StrictRedis

from appcore.helpers.singleton import Singleton


@Singleton
class StorageService(object):
    def __init__(self, storage_config):
        super(StorageService, self).__init__()
        self.client = StrictRedis(**storage_config)

    def get(self):
        return self.client
