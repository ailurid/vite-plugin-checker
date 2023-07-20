import { describe, expect, it } from 'vitest'

import { getHmrOverlayText, isServe, sleepForServerReady } from '../../testUtils'

// TODO: appropriate test(s) - this one is frokm config-overlay-false

/*
CASES
- panelLevel:
  - not set
  - "warning"
  - "error"
  - invalid string
  - invalid number
  - null
  - something else?
- number of warnings
  - 0
  - 1+
- number of errors
  - 0
  - 1+
- checkers
  - eslint
  - typescript
  - TODO: can overlay config be set per checker? don't think so, but confirm
*/

// describe('config-overlay-panel-level', () => {
//   describe.runIf(isServe)('serve', async () => {
//     it('should not find overlay', async () => {
//       await sleepForServerReady()
//       try {
//         await getHmrOverlayText()
//       } catch (e) {
//         await expect((e as any).toString()).toContain(
//           'Error: Invariant failed: .message-body is expected in shadow root'
//         )
//       }
//     })
//   })
// })
