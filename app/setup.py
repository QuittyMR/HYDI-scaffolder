
try:
    from setuptools import setup, find_packages
except ImportError:
    from distutils.core import setup

config = {
    'description': 'Baseline App',
    'author': 'Tomer Raz',
    'author_email': 'quittyband@gmail.com',
    'version': '0.1',
    'install_requires': ['nose'],
    'packages': find_packages(),
    'scripts': [],
    'name': 'app'
}

setup(**config)
