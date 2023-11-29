# Project Name

## Introduction

This project is designed to follow the Official NestJs Fundamentals course.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js
- Docker (for postegres DB)

### Installation

## Basic

1. Clone the repository:

   ```bash
   git clone https://github.com/fianso98/iluvcoffe.git

2. cd iluvcoffe

3. npm install

## Setting Up Environment Variables

Copy the environment file for setup:

1. cp .env.example env

## Docker Compose Configuration
The docker-compose.yml file includes essential configurations for PostgreSQL DB setup.

To launch the containers, use the following command:
docker-compose.yml file contains the necessary configurations related to postgreSQL DB

1. docker-compose up -d

The -d flag stands for detached mode, meaning it runs the containers in the background.

## Running the Application

1. nest start
