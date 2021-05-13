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

    post("/getLevel") { req, res ->
        getLevel(req, res, level)
    }
}

fun getLevel(req : Request, res : Response, level : Level?): String? {
    if (level != null) {
        return Gson().toJson(level.itemsList)
    } else {
        val type = object : TypeToken<MutableList<LevelItem>>(){}.type
        var list: MutableList<LevelItem> = Gson().fromJson(req.body(), type)
        return Gson().toJson(list)
    }
}

