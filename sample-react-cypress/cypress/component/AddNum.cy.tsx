/// <reference types="cypress" />
//AddNumコンポーネントのテスト
import React, { EventHandler } from 'react'
import AddNum from '../../src/AddNum'

// describe('表示確認', () => {
//     it('加算確認', () => {
//         cy.mount(<AddNum num1={123} num2={200} />)
//         cy.get('[data-cy=p1]').should('have.value', '123');
//         cy.get('[data-cy=p2]').should('have.value', '200');
//         cy.get('[data-cy=p3]').should('have.text', '計算結果：123+200=' + String(123 + 200));
//     })

// })

// describe('2つの値の足し算を行う', () => {
//     it('インプット1を入力すると入力1に値が表示されている', () => {
//         cy.mount(<AddNum num1={0} num2={0} />)

//         cy.get('[data-cy=p1]').type('123')
//         cy.get('[data-cy=p1]').should('have.value', '123')
//     })
//     it('インプット1、2を入力すると加算されてインプット3に表示される', () => {
//         cy.mount(<AddNum num1={0} num2={0} />)

//         cy.get('[data-cy=p1]').type('100')
//         cy.get('[data-cy=p2]').type('200')
//         cy.get('[data-cy=p3]').should('have.text', '計算結果：100+200=' + String(300))
//     })

// })



describe('計算結果の値を戻す', () => {
    it('callback関数を指定し、計算結果が取れる', () => {
        let calcResult = "-1";
        const onChange = (value: string) => {
            calcResult = value;
        }
        cy.mount(<AddNum onChange={onChange} num1={0} num2={0} />);
        cy.get('[data-cy=p1]').type('100');
        cy.get('[data-cy=p2]').type('200').then(() => {
            expect(calcResult).to.eq("300");
        });

    })
})

// //★これだめだった、expectがonChangeより前に来てしまう。
// describe('計算結果の値を戻す', () => {
//     it('callback関数を指定し、計算結果が取れる', () => {
//         let calcResult = "-1";
//         const onChange = (value: string) => {
//             calcResult = value;
//         }
//         cy.mount(<AddNum onChange={onChange} num1={0} num2={0} />);
//         cy.get('[data-cy=p1]').type('100');
//         cy.get('[data-cy=p2]').type('200');
//          expect(calcResult).to.eq(300);


//     })
// })