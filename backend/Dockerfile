# Use an official Python runtime as a parent image
FROM python:3.11

# Create a non-root user for security
RUN useradd -m -u 1000 user
USER user

# Set the working directory in the container
WORKDIR /app

# Copy the dependencies file to the working directory
COPY ./requirements.txt requirements.txt

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Copy the rest of the application's code to the working directory
COPY . .

# Command to run the application
CMD ["gunicorn", "--bind", "0.0.0.0:7860", "--worker-class", "gevent", "--timeout", "120", "--preload", "app:app"]