/**
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
 * @param n
 */
export function minPartitions(n: string): number {
    // idea: we try to subtract as frequently as possible with the largest possible deci-binary.

    const getLargestDeciBinary = (input: string) => {
        let deciBinary = ''

        input.split('').forEach(letter => {
            if (Number(letter)) {
                deciBinary += '1'
            } else {
                deciBinary += '0'
            }
        })
    }

    let accumulator = Number(n)
    let timesSubtracted = 0

    while (accumulator !== 0) {
        const deciBinary = Number(getLargestDeciBinary(String(accumulator)))
        accumulator -= deciBinary
        timesSubtracted++
    }

    return timesSubtracted
}
