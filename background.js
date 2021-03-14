var parent = document.querySelectorAll("dl.stats"); 

for (var i=0; i < parent.length; i++) {
    var kudos = parent[i].querySelector("dd.kudos");
    var hits = parent[i].querySelector("dd.hits");

    if (kudos == null || hits == null) {
        continue;
    }

    let child = document.createElement("dt");
    child.innerText="Kudos/Hits Ratio:"
    child.className="kudos-hits"

    let child2 = document.createElement("dd");
    child2.innerText= (100*parseInt(kudos.innerText)/parseInt(hits.innerText)).toFixed(1) + "%";
    child2.className="kudos-hits"

    parent[i].appendChild(child);
    parent[i].appendChild(child2);
}