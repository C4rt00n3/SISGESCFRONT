import * as React from 'react';

export const maskMoney = (event: React.FormEvent<HTMLInputElement>) => {
  const { value } = event.currentTarget;
  return value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');
};

export const maskCPF = (event: React.FormEvent<HTMLInputElement>) => {
  event.currentTarget.maxLength = 15;
  const { value } = event.currentTarget;

  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const maskPhone = (event: React.FormEvent<HTMLInputElement>) => {
  event.currentTarget.maxLength = 15;
  const { value } = event.currentTarget;
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{4})/, '$1-$2');
};

export const maskCEP = (event: React.FormEvent<HTMLInputElement>) => {
  event.currentTarget.maxLength = 9;
  const { value } = event.currentTarget;
  return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2');
};

export const maskServicoMilitar = (event: React.FormEvent<HTMLInputElement>) => {
  event.currentTarget.maxLength = 13;
  const { value } = event.currentTarget;
  return value
    .replace(/\D/g, '') // Remove todos os caracteres não numéricos
    .replace(/(\d{5})(\d)/, '$1/$2') // Coloca uma barra após os primeiros 5 dígitos
    .replace(/(\d{4})(\d)/, '$1-$2'); // Coloca um hífen após os próximos 4 dígitos
};

export const maskSus = (event: React.FormEvent<HTMLInputElement>) => {
  event.currentTarget.maxLength = 15;
  const { value } = event.currentTarget;

  return value
    .replace(/\D/g, '') // Remove todos os caracteres não numéricos
    .slice(0, 18) // Limita o valor a 15 dígitos
    .replace(/^(\d{3})(\d{5})(\d{4})(\d{3}).*/, '$1.$2.$3-$4'); // Aplica a máscara XXX.XXXXX.XXXXXX-XXXX
};

export const maskTituloEleitor = (event: React.FormEvent<HTMLInputElement>) => {
  event.currentTarget.maxLength = 14;
  const { value } = event.currentTarget;
  return value
    .replace(/\D/g, '') // Remove todos os caracteres não numéricos
    .replace(/(\d{4})(\d)/, '$1 $2') // Adiciona um espaço após os primeiros 4 dígitos
    .replace(/(\d{4})(\d)/, '$1 $2'); // Adiciona outro espaço após os próximos 4 dígitos
};

export type MaskTypes = 'te' | 'cpf' | 'money' | 'ra' | 'phone' | 'cep' | 'sus';

type Masks = Record<
  MaskTypes,
  (event: React.FormEvent<HTMLInputElement>) => string
>;

const masks: Masks = {
  cpf: maskCPF,
  money: maskMoney,
  phone: maskPhone,
  cep: maskCEP,
  ra: maskServicoMilitar,
  sus: maskSus,
  te: maskTituloEleitor
};

export default masks;