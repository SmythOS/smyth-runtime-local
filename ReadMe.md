<p align="center">
  <img width="auto" src="smythos.svg" alt="Header">
</p>

# Smyth Runtime Local

Smyth Runtime Local is a local version of the Smyth Runtime. You can use the executable to run, test and develop Smyth agents locally.

### Getting Started

To get started, clone the repository, copy the vault template and add your API keys to the vault.json file. The use the binary for your platform to run the agent.

```
git clone git@github.com:Smyth-ai/smyth-runtime-local.git
cp vault.json.example vault.json          # add API keys to vault.json

./bin/smyth-runtime-linux \
 --agent agents/llm.smyth \
 --vault vault.json \
 --post question="What is the capital of France?" \
 --endpoint ask
```

<p align="center">
  <img width="auto" width="500" src="./ReadMe.gif">
</p>

### Video Tutorial

For a detailed walkthrough of how to use Smyth Runtime Local, check out our [tutorial video](https://youtu.be/RiNzFegoL-Y).

<p align="center">
  <a href="https://youtu.be/RiNzFegoL-Y">
    <img width="500" src="https://img.youtube.com/vi/RiNzFegoL-Y/maxresdefault.jpg" alt="Smyth Runtime Local Tutorial">
  </a>
</p>

### CLI Arguments

| Argument             | Description                               |
| -------------------- | ----------------------------------------- |
| `--agent <file>`     | Path to `.smyth` agent file               |
| `--vault <file>`     | Path to the vault file                    |
| `--vault-key <file>` | Path to the pem file to decrypt `--vault` |
| `--get [params...]`  | Make a GET call                           |
| `--post [params...]` | Make a POST call                          |
| `--endpoint <name>`  | Endpoint name                             |
| `-v, --version`      | Display version information               |
| `-d, --debug`        | Dump all args to the console              |
| `--help, -h`         | Show help message                         |
