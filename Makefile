DOCKER_COMPOSE = docker-compose

upgrade:
	$(DOCKER_COMPOSE) stop
	$(DOCKER_COMPOSE) build
	$(DOCKER_COMPOSE) up -d

boot:
	$(DOCKER_COMPOSE) up -d

stop: ## Stop containers
	$(DOCKER_COMPOSE) stop
