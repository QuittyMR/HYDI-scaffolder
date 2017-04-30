from abc import ABCMeta, abstractmethod

from six import add_metaclass


@add_metaclass(ABCMeta)
class BaseApi(object):
    """
    Every API path class should inherit from this interface-class, and imported in paths/__init__.py .
    Each public method you define here will become an api route in the path returned by _path() .
    The docstring for each method should contain only a comma-separated list of the methods supported by the route.   
    Missing or erroneous methods will be discarded (method will be regarded as 'GET' if no methods are found)
    """
    @abstractmethod
    def _path(self):
        """
        URL subpath for the routes contained in this file. 
        Example: http://www.domain.com/<_path>/...
        """
