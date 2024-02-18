import kotlin.math.max
import kotlin.math.min

//Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

fun trap(height: IntArray): Int {
  val left = MutableList<Int>(height.size) { 0 }
  val right = MutableList<Int>(height.size) { 0 }

  left[0] = height[0]
  right[height.size - 1] = height[height.size - 1]

  for (i in 1 until height.size) {
    left[i] = max(left[i - 1], height[i])
  }

  for (i in height.size - 2 downTo 0) {
    right[i] = max(right[i + 1], height[i])
  }

  var water = 0

  for (i in 0 until height.size) {
    water += min(left[i], right[i]) - height[i]
  }

  return water
}

val height = intArrayOf(0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1)
val height2 = intArrayOf(4,2,0,3,2,5)

//println(trap(height) == 6)
println(trap(height2) == 9)