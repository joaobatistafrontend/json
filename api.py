import json
import requests

# requesicao= requests.get("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
# print(requesicao.json())
# usbrl = requesicao.json()
# print(usbrl['USDBRL'])
# print(usbrl['USDBRL']['bid'])



cep = requests.get('https://cep.awesomeapi.com.br/json/')
print(cep.json())
dados = cep.json()
cep = dados['cep']
cidade = dados['city']
estado = dados['state']
bairro = dados['district']
endereco = dados['address']
print(f'cep: {cep}')
print(f'cidade: {cidade}')
print(f'estado: {estado}')
print(f'bairro: {bairro}')
print(f'endereço: {endereco}')
