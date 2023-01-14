export function onRequest(context) {
    // Hello world
    // return new Response(
    //     JSON.stringify({
    //         "subject": "acct:neruthes@mypubnode.pages.dev",
    //         "links": [
    //             {
    //                 "rel": "http://webfinger.net/rel/profile-page",
    //                 "type": "text/html",
    //                 "href": "http://mypubnode.pages.dev/u/neruthes/"
    //             },
    //             {
    //                 "rel": "self",
    //                 "type": "application/ld+json",
    //                 "href": "http://mypubnode.pages.dev/u/neruthes/Person.json"
    //             },
    //             {
    //                 "rel": "self",
    //                 "type": "application/activity+json",
    //                 "href": "http://mypubnode.pages.dev/u/neruthes/outbox/index.json"
    //             }
    //         ]
    //     })
    // );
    return new Response(
        // context.params
        Object.keys(context)
    );
    // return new Response(
    //     JSON.stringify(context., '\t', 4)
    // );
};
