#!/usr/bin/env python3
# ============================================================================
# FRONTEND DEPLOYMENT
# ============================================================================
# Unified deployment pattern for all React SPA frontends.
# Config lives in frontblok.config.json — this file just runs it.
#
# Usage: python3 deploy.py
# ============================================================================

import subprocess

# Auto-upgrade frontblok-deploy before importing
subprocess.run(
    "uv pip install --system --upgrade --quiet "
    "git+https://github.com/velosovictor/frontblok-deploy.git",
    shell=True, check=False,
)

from frontblok_deploy import FrontendDeployer

FrontendDeployer.from_config().deploy()
