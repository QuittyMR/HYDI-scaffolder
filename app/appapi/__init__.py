from sys import path as PATH
from os import path

PATH.append(path.join(path.dirname(__file__), ".."))
if __name__ == '__main__':
    from appapi.app import App
    app = App()
    app.run()
