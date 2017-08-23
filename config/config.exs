# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :code_racer,
  ecto_repos: [CodeRacer.Repo]

# Configures the endpoint
config :code_racer, CodeRacerWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "s6o5kdynUt6ynzGaBIwQYKm3buJtoFpXp0lNznG7I2NDwwGJLlwAAEH6uGL+5zsd",
  render_errors: [view: CodeRacerWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: CodeRacer.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
