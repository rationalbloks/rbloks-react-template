#!/usr/bin/env python3
# ============================================================================
# RBLOKS REACT TEMPLATE DEPLOYMENT
# ============================================================================
# Deploy a customer React app to Kubernetes.
# All logic lives in frontblok-deploy — this file is config only.
#
# Install: pip install -e /path/to/frontblok-deploy
# Usage:   python3 deploy.py
# ============================================================================

from frontblok_deploy import FrontendDeployer

FrontendDeployer(
    vite_args=[
        "VITE_DATABASE_API_URL",
        "VITE_API_URL",
        "VITE_GOOGLE_CLIENT_ID",
    ],
    required_vars=[
        "VITE_DATABASE_API_URL",
        "VITE_GOOGLE_CLIENT_ID",
    ],
    csp_sources={
        "script_src": "https://js.stripe.com https://accounts.google.com https://apis.google.com https://cdn.jsdelivr.net",
        "style_src": "https://fonts.googleapis.com https://accounts.google.com https://cdn.jsdelivr.net",
        "font_src": "https://fonts.gstatic.com https://fonts.googleapis.com",
        "frame_src": "https://js.stripe.com https://hooks.stripe.com https://accounts.google.com",
    },
).deploy()
