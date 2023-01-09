
module PagenotfoundThreejs
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/pagenotfoundthreejs.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "pagenotfound_threejs",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "pagenotfound_threejs.min.js",
    external_url = "https://unpkg.com/pagenotfound_threejs@0.0.1/pagenotfound_threejs/pagenotfound_threejs.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "pagenotfound_threejs.min.js.map",
    external_url = "https://unpkg.com/pagenotfound_threejs@0.0.1/pagenotfound_threejs/pagenotfound_threejs.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
