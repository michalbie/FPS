import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import spark.Spark.*
import Level.Level
import Level.LevelItem
import spark.Response
import spark.Request

fun main() {
    staticFiles.location("/public")
    port(5000)
    var level : Level? = null

    post("/saveLevel") { req, res ->
        val type = object : TypeToken<MutableList<LevelItem>>(){}.type
        var list: MutableList<LevelItem> = Gson().fromJson(req.body(), type)
        level = Level(list, 10)
        res.type("application/json")
        Gson().toJson(list)
    }

    options("/getLevel") { req, res -> checkOptions(req, res) }
    post("/getLevel") {req, res ->  getLevel(req, res, level) }

}

fun checkOptions(request: Request, response: Response) {
    println("options")
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Content-Type", "text/plain; charset=utf-8")
}

fun getLevel(req : Request, res : Response, level : Level?): String? {
    res.header("Access-Control-Allow-Origin", "*");
    res.type("application/json")

    if (level != null) {
        return Gson().toJson(level.itemsList)
    } else {
        return "Failed"
    }
}

