FROM python:3.6-slim
COPY ./app.py /deploy/
COPY ./requirements.txt /deploy/
WORKDIR /deploy/
RUN pip3 install --no-cache-dir -r requirements.txt
EXPOSE 80
ENTRYPOINT ["python", "app.py"]