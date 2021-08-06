import {minPartitions} from "./challenge";

test('minPartitions', () => {
    expect(minPartitions("32")).toEqual(3)
    expect(minPartitions("82734")).toEqual(8)
    expect(minPartitions("27346209830709182346")).toEqual(9)
})
