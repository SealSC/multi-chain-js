import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import {ApiPromise, WsProvider} from '@polkadot/api'

describe('init', () => {
  it('init Funtion', async() => {
    let Action = await new Actions()
    let apiIn = await Action.init('wss://rpc.polkadot.io');
    expect(apiIn.code).to.equal(0)
  }).timeout(100000)
})
