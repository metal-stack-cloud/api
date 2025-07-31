from setuptools import setup, find_packages
import os

NAME = "metalstack.cloud"

REQUIRES = [
    "connecpy>=1.5.2",
]

setup(
    name=NAME,
    version=os.environ["VERSION"],
    description="Python API client for metalstack.cloud api",
    long_description="Python API client for metalstack.cloud api.",
    author="metalstack.cloud authors",
    url="https://github.com/metal-stack-cloud/api",
    keywords=["metalstack.cloud"],
    install_requires=REQUIRES,
    license="MIT",
    packages=find_packages(),
    classifiers=[
        'Intended Audience :: Developers',
        'Natural Language :: English',
        'Operating System :: POSIX',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.11',
        'Programming Language :: Python :: 3.12',
        'Programming Language :: Python :: 3.13',
    ],
    include_package_data=True,
)
