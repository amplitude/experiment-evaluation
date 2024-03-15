package com.amplitude.experiment.evaluation.util

import com.amplitude.experiment.evaluation.EvaluationFlag
import com.amplitude.experiment.evaluation.json
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.engine.cio.CIO
import io.ktor.client.request.HttpRequestBuilder
import io.ktor.client.request.headers
import io.ktor.client.request.parameter
import io.ktor.client.request.request
import io.ktor.client.request.url
import io.ktor.client.statement.HttpResponse
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.http.isSuccess
import io.ktor.http.path
import kotlinx.serialization.decodeFromString

internal class HttpErrorResponseException(
    statusCode: HttpStatusCode
) : Exception("HTTP error response: code=$statusCode, message=${statusCode.description}")

suspend fun HttpClient.get(
    url: String,
    path: String,
    block: HttpRequestBuilder.() -> Unit
): HttpResponse {
    return request(HttpMethod.Get, url, path, block)
}

suspend fun HttpClient.request(
    method: HttpMethod,
    url: String,
    path: String,
    block: HttpRequestBuilder.() -> Unit
): HttpResponse {
    return request {
        this.method = method
        url {
            url(url)
            path(path)
        }
        block.invoke(this)
    }
}

class FlagApi(private val serverUrl: String = "https://api.lab.amplitude.com") {
    private val client = HttpClient(CIO)
    suspend fun getFlagConfigs(deploymentKey: String): List<EvaluationFlag> {
        val response = client.get(serverUrl, "/sdk/v2/flags") {
            headers {
                set("Authorization", "Api-Key $deploymentKey")
            }
            parameter("eval_mode", "remote")
        }
        if (!response.status.isSuccess()) {
            throw HttpErrorResponseException(response.status)
        }
        val body: String = response.body()
        return json.decodeFromString(body)
    }
}
