//Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
//
//Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

fun isPathCrossing(path: String): Boolean {
  val visited = mutableSetOf<Int>(0)
  var x = 0
  var y = 0

  for (cardinalPoint in path) {
    when (cardinalPoint) {
      'N' -> y--
      'S' -> y++
      'E' -> x++
      'W' -> x--
    }

    if (!visited.add(y * 20000 + x)) {
      return true
    }
  }

  return false
}

val path = "NES"
val path2 = "NESWW"

println(isPathCrossing(path) == false)
println(isPathCrossing(path2) == true)