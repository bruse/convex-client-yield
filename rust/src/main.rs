use std::{
    collections::BTreeMap,
    env,
};

use convex::ConvexClient;
use anyhow::Result;
use futures::StreamExt;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    dotenvy::from_filename(".env.local").ok();
    dotenvy::dotenv().ok();

    let deployment_url = env::var("CONVEX_URL").unwrap();

    let mut client = ConvexClient::new(&deployment_url).await.unwrap();
    let mut sub = client.subscribe("tasks:get", maplit::btreemap!{}).await?;
    while let Some(result) = sub.next().await {
        println!("{result:?}");
        // The query below will trigger a new yield in the stream above
        // if it is commented out the loop will pause
        let _todos = client.query("todos:get", BTreeMap::new()).await.unwrap();
    }

    Ok(())
}

