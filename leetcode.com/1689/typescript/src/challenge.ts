/**
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
 *
 * Always do this in string due to precision error
 * @param n
 */
export function minPartitions(n: string): number {
    // idea: we try to subtract as frequently as possible with the largest possible deci-binary.
    // hmm that didn't work

    /**
     * Best way to optimize is probably to ensure that digits stay at 0.
     * @param input
     */
    const getOptimizedDeciBinary = (input: string) => {
        let deciBinary = ''

        input.split('').forEach(letter => {
            if (Number(letter)) {
                deciBinary += '1'
            } else {
                deciBinary += '0'
            }
        })

        return String(deciBinary)
    }

    const subtractString = (a: string, b: string): string => {
        const bReversed = b.split('').reverse()
        const aReversed = a.split('').reverse()

        return aReversed.map((digit, index) => {
            return String(Number(digit) - Number(bReversed[index] || 0) )
        }).join('')
    }

    let accumulator = n
    let timesSubtracted = 0

    while (Number(accumulator) !== 0) {
        const deciBinary = getOptimizedDeciBinary(String(accumulator))
        accumulator = subtractString(accumulator, deciBinary)
        timesSubtracted++
    }

    return timesSubtracted
}
