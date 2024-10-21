# Smyth Runtime Local

Smyth Runtime Local is a local version of the Smyth Runtime. You can use the executable to run, test and develop Smyth agents locally.

### Getting Started
```
git clone git@github.com:Smyth-ai/smyth-runtime-local.git
cp vault.json.example vault.json
# add API keys to vault.json

./smyth-runtime-macos \
 --agent=agents/openai.smyth \
 --vault=vault.json \
 --method=GET \
 --path=/api/test
```


### CLI Arguments
| Argument         | Description                     |
|------------------|---------------------------------|
| `--agent`        | Path to `.smyth` agent file     | 
| `--vault`        | Path to the vault file          | 
| `--method`       | The HTTP method to use          | 
| `--path`         | Path to the API Endpoint        | 
| `--query`        | Query parameters as JSON        | 
| `--body`         | Body parameters as JSON         | 
| `-v`             | Display version information     | 
| `--help, -h`     | Show help message               | 
