# Self documenting Makefile code
# ------------------------------------------------------------------------------------
ifneq ($(TERM),)
	BLACK := $(shell tput setaf 0)
	RED := $(shell tput setaf 1)
	GREEN := $(shell tput setaf 2)
	YELLOW := $(shell tput setaf 3)
	LIGHTPURPLE := $(shell tput setaf 4)
	PURPLE := $(shell tput setaf 5)
	BLUE := $(shell tput setaf 6)
	WHITE := $(shell tput setaf 7)
	RST := $(shell tput sgr0)
else
	BLACK := ""
	RED := ""
	GREEN := ""
	YELLOW := ""
	LIGHTPURPLE := ""
	PURPLE := ""
	BLUE := ""
	WHITE := ""
	RST := ""
endif
MAKE_LOGFILE = /tmp/next-starter-tpl.log
MAKE_CMD_COLOR := $(BLUE)

# Default action
# Defines default command when `make` is executed without additional parameters
# ------------------------------------------------------------------------------------
default: all

help: ## Show this menu
	@echo 'Management commands for Hyperdrive:'
	@echo 'Usage:'
	@echo '    ${MAKE_CMD_COLOR}make${RST}                       Prepares and setup up project with default settings'
	@grep -E '^[a-zA-Z_0-9%-]+:.*?## .*$$' Makefile | awk 'BEGIN {FS = ":.*?## "}; {printf "    ${MAKE_CMD_COLOR}make %-21s${RST} %s\n", $$1, $$2}'
	@echo
	@echo '    🏢 ${YELLOW}Org                     Hyperdrive (github.com/Hyperdrive-go/hd)${RST}'
.PHONY: help

all:
	rush update && rush build
.PHONY: all


dev-aggregate: ## Start development aggregate site
	npm run --prefix projects/aggregate dev
.PHONY: dev-aggregate

dev-creators: ## Start development creators site
	npm run --prefix projects/creators dev
.PHONY: dev-creators

dev-marketing: ## Start development marketing site
	npm run --prefix projects/marketing-site dev
.PHONY: dev-marketing