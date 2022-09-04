/// <reference types="cypress" />
import Fizzbuzz from '../../src/Fizzbuzz'
//fizubuzzをTDDで実施してみよう
//[x]3の倍数の場合はfizzを出力
//[x]5の倍数の場合はbuzzを出力
//[x]3と5の倍数の場合はfizzbuzzを出力
//[x]3の倍数でもなく5の倍数でもない場合は入力値を返す
//[x]空の場合は空

describe('Fizzbuzzのテスト', () => {
  it('3の倍数だったらfizzを出力', () => {
    expect('fizz').to.equal(Fizzbuzz('3'));
  })
  it('5の倍数だったらbuzzを出力', () => {
    expect('buzz').to.equal(Fizzbuzz('5'));
  })
  it('3と5の倍数だったらふfizzbuzzを出力', () => {
    expect('fizzbuzz').to.equal(Fizzbuzz('15'));
  })
  it('3の倍数でもなく5の倍数でもない場合は入力値を返す', () => {
    expect('4').to.equal(Fizzbuzz('4'));
  })
  it('3空の場合は空', () => {
    expect('').to.equal(Fizzbuzz(''));
  })
})