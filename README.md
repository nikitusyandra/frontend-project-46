### Hexlet tests and linter status:
[![Actions Status](https://github.com/nikitusyandra/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/nikitusyandra/frontend-project-46/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/c4d2c4250f0bfa36a786/maintainability)](https://codeclimate.com/github/nikitusyandra/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/c4d2c4250f0bfa36a786/test_coverage)](https://codeclimate.com/github/nikitusyandra/frontend-project-46/test_coverage) [![Testing](https://github.com/nikitusyandra/frontend-project-46/actions/workflows/node-check.yml/badge.svg)](https://github.com/nikitusyandra/frontend-project-46/actions/workflows/node-check.yml)

## Description:
**Generator of difference** is the CLI program that generate difference between two files. Supporting formats: JSON, YML, YAML.
## Install
```
git clone https://github.com/nikitusyandra/frontend-project-46.git
cd frontend-project-46
make install
```
## Setup genDiff

```
chmod +x bin/gendiff.js

make publish

sudo npm link
```

## Run tests

```make test```


## Run lint

```make lint```

## How to use:
```
gendiff [options] <filepath1> <filepath2>
```
For example:
```
gendiff file1.json file2.json
```

## genDiff Help

```
gendiff -h
```
![Снимок экрана от 2023-09-20 14-44-54](https://github.com/nikitusyandra/frontend-project-46/assets/120372224/02b28de8-1653-4f42-bf6e-725b2837edfe)

The default output is `stylish`, but it can also be `plain` and `json`. To output the result in a specific format, use `-f [format]`.

## An example of stylish format output: 
```
gendiff file1.json file2.json
gendiff file1.yml file2.yml
```
![Снимок экрана от 2023-09-20 14-52-08](https://github.com/nikitusyandra/frontend-project-46/assets/120372224/e6b57d85-8139-46ee-9fff-ff9b4708c552)
## Example of plain format output:
```
gendiff --format plain file1.json file2.json
```
![Снимок экрана от 2023-10-09 14-25-40](https://github.com/nikitusyandra/frontend-project-46/assets/120372224/e69e86df-c89a-4c0d-9885-3a234acd2b9a)
## Example of json format output:
```
gendiff -f json file1.json file2.json
```
![изображение](https://github.com/nikitusyandra/frontend-project-46/assets/120372224/95d4dbb9-5562-4bbc-b95b-43a26e5305f3)



