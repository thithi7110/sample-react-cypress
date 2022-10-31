/// <reference types="cypress" />
//Adressコンポーネントのテスト
import React, { EventHandler } from 'react'
import Address from '../../src/Address'

describe('住所表示', () => {
    beforeEach(() => {
        // スコープ内の各テストごとに実行前に実行

        cy.intercept('GET', 'http://localhost:8085/api/zip?zipcode*', {
            statusCode: 200,
            body: {
                "message": null,
                "results": [
                    {
                        "address1": "沖縄県",
                        "address2": "中頭郡北中城村",
                        "address3": "大城",
                        "kana1": "ｵｷﾅﾜｹﾝ",
                        "kana2": "ﾅｶｶﾞﾐｸﾞﾝｷﾀﾅｶｸﾞｽｸｿﾝ",
                        "kana3": "ｵｵｸﾞｽｸ",
                        "prefcode": "47",
                        "zipcode": "9012314"
                    }
                ],
                "status": 200
            },
        }).as('getZipInfo');
    })

    it('Adreesに郵便番号を入力すると郵便番号APIから住所を検索し、郵便番号の下に住所を文字として表示する', () => {
        // cy.intercept(
        //     {
        //         method: "GET",
        //         hostname: 'zipcloud.ibsnet.co.jp',
        //         url: 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=9012315',
        //         headers: {
        //             "access-control-allow-origin": window.location.origin,
        //             "Access-Control-Allow-Credentials": "true",
        //         },
        //     },
        //     {
        //         data: {
        //             "address1": "沖縄県",
        //             "address2": "",
        //             "address3": "",
        //             "kana1": "",
        //             "kana2": "",
        //             "kana3": "",
        //             "prefcode": "",
        //         }
        //     }
        // ).as('getZipInfo');
        cy.mount(<Address />)

        cy.get('[data-cy=zipcode]').type('9000024').then(() => {
            // cy.wait('@getZipInfo').then(() => {
            //     cy.get('[data-cy=address1]').should('have.value', "沖縄県");
            // })
            cy.get('[data-cy=address1]').should('have.value', "沖縄県");

            cy.get('[data-cy=zipcode]').blur();

        })
    })

    it('画像比較によるテスト', () => {
        // cy.intercept(
        //     'http://localhost:8085/api/zip?zipcode=9000024',
        // ).as('getZipInfo');


        cy.mount(<Address />)

        cy.get('[data-cy=zipcode]').type('9000024');
        // cy.wait('@getZipInfo').then(() => {
        //     cy.get('[data-cy=address1]').should('have.value', "沖縄県");
        // })
        cy.wait('@getZipInfo').then(() => {
            cy.get('[data-cy=zipcode]').blur();
            cy.matchImageSnapshot();
        });





    })

    // it('Adreesに郵便番号を属性として渡すと郵便番号APIから住所を検索し、郵便番号の下に住所を文字として表示する', () => {
    // })

    // it('指定した郵便番号で住所が取得できなかった場合、郵便番号の下に赤字で「未存在エラー」と表示される', () => {
    // })

    // it('数字とハイフン以外は入力できないこと', () => {
    // })
})
