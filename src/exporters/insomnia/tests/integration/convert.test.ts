const introspectionResult = require('../../../tests/utils/test_introspection_result.json');
const expectedConvertionResult = require('./expected_convertion_result.json');
import Insomnia from '../../insomnia';

describe('Insomnia', function () {
  describe('#convert', function () {
    it('corretly generates a insomnia collection file', async function () {
      const result = (new Insomnia).convert(introspectionResult, 'http://localhost:3000', 'Query', 'Mutation')

      expect(JSON.parse(result)).toEqual(expectedConvertionResult)
    })
  })
})
